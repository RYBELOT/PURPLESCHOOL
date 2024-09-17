const data = {
    model: 'superPhone',
    specifications: {
      ram: 16,
      rom: 256
    },
    search: function(){
      strSearch = (`search=${data.model}&${data.specifications.ram}&${data.specifications.rom}`);
      return strSearch
    }
  }
  
  console.log(data.search());

