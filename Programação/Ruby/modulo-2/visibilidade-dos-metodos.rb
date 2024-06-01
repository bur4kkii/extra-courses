class Automovel
    def self.tipo_cambio
        puts "Manual"
    end
    def acelera
        puts "Acelerando automóvel"
    end

    private
    def verifica_combustivel
        puts "Verificando combustível"
    end
end

# por padrão todos os métodos são publicos

carro = Automovel.new

puts carro.acelera
puts Automovel.tipo_cambio
# puts carro.verifica_combustivel

# não é possível acessar fora da classe