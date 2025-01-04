using Microsoft.AspNetCore.Mvc;
using MedicationOrderSystem.Models;

namespace MedicationOrderSystem.Controllers
{
    public class OrderController : Controller
    {
        // GET: Display the Order form
        [HttpGet]
        public IActionResult Index()
        {

            return View();
        }

        // POST: Handle form submission and validate the model
        [HttpPost]
        public IActionResult Submit(OrderViewModel order)
        {
            if (!ModelState.IsValid)
            {
                foreach (var error in ModelState.Values.SelectMany(v => v.Errors))
                {
                    Console.WriteLine($"Validation Error: {error.ErrorMessage}");
                }
                return BadRequest(new { message = "Error placing the order." });
            }

            // Process the order here
            Console.WriteLine($"Order Received: {order.MedicationName}, {order.MedicationType}");
            return RedirectToAction("OrderSummary", order);
        }




        // GET: Display the Order Summary page
        [HttpGet]
        public IActionResult OrderSummary(OrderViewModel model)
        {
            return View(model);
        }

        // GET: Display the Order Success page after successful submission
        [HttpGet]
        public IActionResult OrderSuccess()
        {
            return View();
        }

        // GET: Privacy
        [HttpGet]
        public IActionResult Privacy()
        {
            return View();
        }


    }
}
