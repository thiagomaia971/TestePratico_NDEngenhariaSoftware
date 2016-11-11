using AutoMapper;
using NDEngenharia.Core.Entities;
using NDEngenharia.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NDEngenharia.MaperProfiles
{
    public class ClienteProfile : Profile
    {
        public ClienteProfile()
        {

            CreateMap<Endereco, EnderecoViewModel>()
                .ForMember(dest => dest.CEP, opt => opt.MapFrom(src => src.CEP))
                .ForMember(dest => dest.Logradouro, opt => opt.MapFrom(src => src.Logradouro))
                .ForMember(dest => dest.Numero, opt => opt.MapFrom(src => src.Numero))
                .ForMember(dest => dest.Referencia, opt => opt.MapFrom(src => src.Referencia))
                .ReverseMap();

            CreateMap<Cliente, ClienteViewModel>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Telefone, opt => opt.MapFrom(src => src.Telefone))
                .ForMember(dest => dest.Endereco, opt => opt.MapFrom(src => Mapper.Map<Endereco, EnderecoViewModel>(src.Endereco)))
                .ReverseMap();
        }
    }
}