class Carro

    def velocidade_maxima
        250
    end

    def adicionar_marca(marca)
        @marca = marca
    end

    def marca
        @marca
    end
end

carro = Carro.new

carro.adicionar_marca("Ford")

puts carro.marca
puts carro.velocidade_maxima