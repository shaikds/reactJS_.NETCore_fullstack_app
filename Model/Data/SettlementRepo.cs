using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace WebApplication2.Model.Data
{
    public class SettlementRepo : ISettlementRepo
    {
        private readonly AppDbContext _context;

        // Constructor
        public SettlementRepo(AppDbContext context)
        {
            _context = context;
        }

        // Add a settlement to DB
        public void AddSettlement(Settlement settlement)
        {
            if (settlement == null) throw new ArgumentNullException(nameof(settlement));
            _context.settlements.Add(settlement);
            _context.SaveChanges();
        }

        // Update a settlement
        public void UpdateSettlement(Settlement settlement)
        {
            if (settlement == null) throw new ArgumentNullException(nameof(settlement));
            _context.Entry(settlement).State = EntityState.Modified;
            _context.SaveChanges();
        }

        // Get a settlement from DB
        public Settlement? GetSettlement(string name)
        {
            if (string.IsNullOrEmpty(name)) throw new ArgumentException("Repo: name is null or empty", nameof(name));
            return _context.settlements.FirstOrDefault(s => s.name == name);
        }

        // Get all settlements
        public List<Settlement> GetAllSettlements()
        {
            return _context.settlements.ToList();
        }

        // Remove a settlement from DB
        public void RemoveSettlement(string name)
        {
            if (string.IsNullOrEmpty(name)) throw new ArgumentException("Repo: name is null or empty", nameof(name));
            var settlement = _context.settlements.FirstOrDefault(s => s.name == name);
            if (settlement == null) throw new ArgumentNullException(nameof(settlement));
            _context.settlements.Remove(settlement);
            _context.SaveChanges();
        }
    }
}
