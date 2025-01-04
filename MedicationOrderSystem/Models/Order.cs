namespace MedicationOrderSystem.Models
{
    public class Order
    {
        public required string MedicationName { get; set; }
        public required string MedicationType { get; set; }
        public int Quantity { get; set; }
        public required string Distributor { get; set; }
        public required string PharmacyBranch { get; set; }
    }
}
