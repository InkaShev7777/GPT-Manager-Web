using System;
using System.Collections.Generic;

namespace ChatGPT_Manager
{
    public partial class Register
    {
        public int Id { get; set; }
        public string UserName { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Email { get; set; } = null!;
    }
}
