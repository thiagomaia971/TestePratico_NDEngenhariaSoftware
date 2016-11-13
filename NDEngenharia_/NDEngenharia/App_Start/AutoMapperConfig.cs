using AutoMapper;
using NDEngenharia.MaperProfiles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NDEngenharia.App_Start
{
    public class AutoMapperConfig
    {
        public static void Register()
        {
            Mapper.Initialize(m => {
                m.AddProfile<ClienteProfile>();
            });

            Mapper.AssertConfigurationIsValid();

        }
    }
}