namespace MedicationOrderSystem.Models
{
    public class OrderViewModel
    {
        public required string MedicationName { get; set; }
        public required string MedicationType { get; set; }
        public int Quantity { get; set; }
        public required string Distributor { get; set; }
        public required List<string> PharmacyBranch { get; set; }
    }
}
