using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace MvcMusicStore.Models
{
    public class Genre
    {
        public int GenreId { get; set; }
        [Required (ErrorMessage = "A Name is required")]
        [StringLength(20, MinimumLength = 2)]
        public String Name { get; set; }
        public string Description { get; set; }
        public List<Album> Albums { get; set; }
    }
}