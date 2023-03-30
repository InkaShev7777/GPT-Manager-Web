using System;
using ChatGPT_Manager.AWS;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OpenAI.GPT3.ObjectModels.ResponseModels;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using static OpenAI.GPT3.ObjectModels.SharedModels.IOpenAiModels;

namespace ChatGPT_Manager.Controllers
{
	[ApiController]
	[Route("api/controller")]
	public class GPTManager : ControllerBase
	{
		private db_a96e21_ilyainka7777Context context;
		private GPT.GPTmanager gpt;
		private AWSmanager aws;
		public GPTManager(db_a96e21_ilyainka7777Context _context)
		{
			this.context = _context;
			this.gpt = new GPT.GPTmanager();
			this.aws = new AWSmanager();
		}
		//
		//	user
		//
		[HttpGet]
		[Route("GetSub")]
		public IResult GetSub()
		{
			try
			{
				List<SubList> list = this.context.SubLists.ToList();
				if (list.Count() > 0)
				{
					return Results.Ok(list);
				}
				return Results.Problem();
			}
			catch (Exception ex)
			{
				return Results.Problem(ex.Message);
			}
		}
		[HttpGet]
		[Route("QueryGPT")]
		public async Task<string> QueryGPT(string qwery, string idUser)
		{
			try
			{
				string responseGPT = await this.gpt.SendQwery(qwery);
				if (responseGPT.Length > 0)
				{
					this.context.HistoryRequest.Add(new HistoryRequest() { IdUser = idUser, Query = qwery, Response = responseGPT });
					this.context.SaveChanges();
					return responseGPT;
				}
				else
				{
					return "The question is incorrect. Try again!";
				}
			}
			catch (Exception ex)
			{
				return "Trouble!!!";
			}
		}

		[HttpPost]
		[Route("QueryGPTImage")]
		public async Task<string> QueryGPTImage(IFormFile file, string idUser)
		{
			try
			{
				this.aws.Upload(file, "rekogbitionbucketinka");
				string resultAws = this.aws.Example(file.FileName, "rekogbitionbucketinka");
				string responseGPT = await this.gpt.SendQwery(resultAws);
				if (responseGPT.Length > 0)
				{
                    this.context.HistoryRequest.Add(new HistoryRequest() { IdUser = idUser, Query = resultAws, Response = responseGPT });
                    this.context.SaveChanges();
                    return responseGPT;
				}
				else
				{
					return "The question is incorrect. Try again!";
				}
			}
			catch (Exception ex)
			{
				return "Trouble!!!";
			}
		}

		[HttpPost]
		[Route("QueryGPTAudio")]
		public async Task<string> QueryGPTAudio(IFormFile file, string idUser)
		{
			try
			{
				//this.aws.Upload(file, "inkabucketaudio");
				var result = await this.aws.GetTextfromAudio(file, "inkabucketaudio");
				string responseGPT = await this.gpt.SendQwery(result);
                this.context.HistoryRequest.Add(new HistoryRequest() { IdUser = idUser, Query = result, Response = responseGPT });
                this.context.SaveChanges();
                return responseGPT;
			}
			catch (Exception ex)
			{
				return ex.Message;
			}
		}
		[HttpPost]
		[Route("saveUserSettings")]
		public void saveUserSettings(string token, int id_sub)
		{

			SubUser user = new SubUser(token, id_sub);
			if (user != null)
			{
				this.context.Entry(user).State = EntityState.Added;
				this.context.SaveChanges();
			}



		}
		[HttpGet]
		[Route("getHistory")]
		public List<HistoryRequest> getHistory(string idUser)
		{
			return this.context.HistoryRequest.Where(x => x.IdUser == idUser).ToList();
		}


		//
		//	admin
		//
	}
}

