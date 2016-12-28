using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular.Heroes.Backend.Services.Mockdata.Model;

namespace Angular.Heroes.Backend.Services.Mockdata.Controllers
{
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {
       

        // GET api/values
        [HttpGet]
        public IList<Hero> Get()
        {
            return HeroRepository.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Hero Get(int id)
        {
            return HeroRepository.GetById(id);
        }

        // POST api/values
        [HttpPost]
        public Hero Post([FromBody]Hero hero)
        {
          return HeroRepository.Add(new Hero { Name = hero.Name });
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(Hero hero)
        {
            HeroRepository.Update(hero);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            HeroRepository.Delete(id);
        }
    }
}
