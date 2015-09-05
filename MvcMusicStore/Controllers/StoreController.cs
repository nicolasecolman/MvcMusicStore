using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcMusicStore.Controllers
{
    public class StoreController : Controller
    {
        //
        // GET: /Store/

        public ActionResult Index()
        {
            return View();
        }

        public String Browse(string genre)
        {
            return "HELLO BROWSE. GENRE: " + HttpUtility.HtmlEncode(genre);
        }

        public String Details(int id)
        {
            return "HELLO Details. ID: " + id;
        }

    }
}
