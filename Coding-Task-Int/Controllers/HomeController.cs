using Microsoft.AspNetCore.Mvc;
using Coding_Task_Int.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Diagnostics;
using System.Linq;

namespace Coding_Task_Int.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly Context _context;

        public HomeController(ILogger<HomeController> logger, Context context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult AddNumbers()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> AddNumbers([FromBody] FizzBuzzNums numbers)
        {

            if (numbers == null || numbers.Start > numbers.End)
            {
                return BadRequest("Invalid range");
            }

            numbers.TimeStamp = DateTime.Now;

            _context.Numbers.Add(numbers);
            await _context.SaveChangesAsync();

            return Json(new { start = numbers.Start, end = numbers.End });
        }
    }
}
