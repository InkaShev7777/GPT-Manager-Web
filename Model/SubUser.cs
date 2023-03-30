using System;
using System.Collections.Generic;

namespace ChatGPT_Manager
{
    public partial class SubUser
    {
        public int Id { get; set; }
        public string Token { get; set; } = null!;
        public int Id_sub { get; set; }
        public SubUser( string token, int id)
        {
            this.Id_sub = id;
            this.Token = token;
        }
    }
}
