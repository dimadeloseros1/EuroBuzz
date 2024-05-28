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
        private readonly Context _context;

        public HomeController(Context context)
        {
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
                return BadRequest(new { message = "Invalid starting number: Start number should be less than End number"});
            }

            // TimesStamp sets the current date and time of the numbers property
            numbers.TimeStamp = DateTime.Now;

            // Adds the numbers object to the Numbers to the Numbers DbSet property from Context
            _context.Numbers.Add(numbers);

            // We save the changes asynchronously. without the SaveChangesAsync we won't be able to save the data in the data base
            await _context.SaveChangesAsync();

            // We return the Json object containing the start number and end number 
            return Json(new { start = numbers.Start, end = numbers.End });
        }
    }
}
