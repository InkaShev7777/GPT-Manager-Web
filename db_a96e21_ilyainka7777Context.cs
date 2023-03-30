using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ChatGPT_Manager
{
    public partial class db_a96e21_ilyainka7777Context : IdentityDbContext<IdentityUser>
    {
        public db_a96e21_ilyainka7777Context()
        {
        }

        public db_a96e21_ilyainka7777Context(DbContextOptions<db_a96e21_ilyainka7777Context> options)
            : base(options)
        {
        }

        //public virtual DbSet<AspNetRole> AspNetRoles { get; set; } = null!;
        //public virtual DbSet<AspNetRoleClaim> AspNetRoleClaims { get; set; } = null!;
        //public virtual DbSet<AspNetUser> AspNetUsers { get; set; } = null!;
        //public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; } = null!;
        //public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; } = null!;
        //public virtual DbSet<AspNetUserToken> AspNetUserTokens { get; set; } = null!;
        public virtual DbSet<HistoryRequest> HistoryRequest { get; set; } = null!;
        public virtual DbSet<Login> Logins { get; set; } = null!;
        public virtual DbSet<Register> Registers { get; set; } = null!;
        public virtual DbSet<SubList> SubLists { get; set; } = null!;
        public virtual DbSet<SubUser> SubUsers { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }


    }
}
