namespace Public_Opinion_Collection.EntityFrameworkCore.Seed.Host
{
    public class InitialHostDbBuilder
    {
        private readonly Public_Opinion_CollectionDbContext _context;

        public InitialHostDbBuilder(Public_Opinion_CollectionDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            new DefaultEditionCreator(_context).Create();
            new DefaultLanguagesCreator(_context).Create();
            new HostRoleAndUserCreator(_context).Create();
            new DefaultSettingsCreator(_context).Create();

            _context.SaveChanges();
        }
    }
}
