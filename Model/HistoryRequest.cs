using System;
using System.Collections.Generic;

namespace ChatGPT_Manager
{
    public partial class HistoryRequest
    {
        public int Id { get; set; }
        public string IdUser { get; set; } = null!;
        public string Query { get; set; } = null!;
        public string Response { get; set; } = null!;
    }
}
