namespace WebApplication2.Model.Data
{
    public interface ISettlementRepo
    {
        void AddSettlement(Settlement settlement);
        void RemoveSettlement(String name);

        List<Settlement> GetAllSettlements();

        Settlement? GetSettlement(String name);
      
        void UpdateSettlement(Settlement settlement);
    }
}
