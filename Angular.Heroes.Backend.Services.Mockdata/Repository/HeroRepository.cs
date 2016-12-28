using Angular.Heroes.Backend.Services.Mockdata.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular.Heroes.Backend.Services.Mockdata
{
    public static class HeroRepository
    {

        private static List<Hero> Heroes = new List<Hero>{
                 new Hero { Id = 11, Name = "Mr. Nice" },
                 new Hero { Id = 12, Name = "Narco" },
                 new Hero { Id = 13, Name = "Bombasto" },
                 new Hero { Id = 14, Name = "Celeritas" },
                 new Hero { Id = 15, Name = "Magneta" },
                 new Hero { Id = 16, Name = "RubberMan" },
                 new Hero { Id = 17, Name = "Dynama" },
                 new Hero { Id = 18, Name = "Dr IQ" },
                 new Hero { Id = 19, Name = "Magma" },
                 new Hero { Id = 20, Name = "Tornado" }
                };

        //private static List<Hero> Heroes
        //{
        //    get
        //    {
        //        return Heroes = new List<Hero>{
        //         new Hero { Id = 11, Name = "Mr. Nice" },
        //         new Hero { Id = 12, Name = "Narco" },
        //         new Hero { Id = 13, Name = "Bombasto" },
        //         new Hero { Id = 14, Name = "Celeritas" },
        //         new Hero { Id = 15, Name = "Magneta" },
        //         new Hero { Id = 16, Name = "RubberMan" },
        //         new Hero { Id = 17, Name = "Dynama" },
        //         new Hero { Id = 18, Name = "Dr IQ" },
        //         new Hero { Id = 19, Name = "Magma" },
        //         new Hero { Id = 20, Name = "Tornado" }
        //        };
        //    }
        //    set { }

        //}

        public static List<Hero> GetAll()
        {
            return Heroes;
        }
        public static Hero GetById(int Id)
        {
            return Heroes.FirstOrDefault(h => h.Id == Id);
        }
        public static Hero Add(Hero hero)
        {
            var biggestId = Heroes.Max(h => h.Id);
            hero.Id = ++biggestId;
            Heroes.Add(hero);
            return hero;
        }
        public static void Update(Hero hero)
        {
            Heroes.FirstOrDefault(h => h.Id == hero.Id);
        }
        public static void Delete(int Id)
        {
            Heroes.Remove(GetById(Id));
        }


        //    private static List<Hero> HeroesMock()
        //    {
        //        return new List<Hero>{
        //        new Hero { Id = 11, Name = "Mr. Nice" },
        //       new Hero { Id = 12, Name = "Narco" },
        //       new Hero { Id = 13, Name = "Bombasto" },
        //       new Hero { Id = 14, Name = "Celeritas" },
        //       new Hero { Id = 15, Name = "Magneta" },
        //       new Hero { Id = 16, Name = "RubberMan" },
        //       new Hero { Id = 17, Name = "Dynama" },
        //       new Hero { Id = 18, Name = "Dr IQ" },
        //       new Hero { Id = 19, Name = "Magma" },
        //       new Hero { Id = 20, Name = "Tornado" }
        //      };
        //    }

    }
}
