class Automovel
    def self.tipo_cambio
        puts "Manual"
    end
    def acelera
        puts "Acelerando automóvel"
    end
end

class Carro < Automovel
    def acelera
        puts "Verificando equipamentos..."
        super
    end
end

carro = Carro.new

puts carro.acelera
puts Automovel.tipo_cambio
puts Carro.tipo_cambio