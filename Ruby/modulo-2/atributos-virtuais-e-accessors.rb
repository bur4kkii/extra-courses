class Carro
    attr_accessor :marca, :modelo
    # attr_accessor disponibiliza para leitura e escrita
    # quando tem : na frente da variável é um tipo de variavel chamado simbol

    # attr_reader - disponibiliza apenas para leitura
    # attr_writer - disponibiliza apenas para escrita

    def velocidade_maxima
        250
    end

    def descricao
        "Marca: #{@marca} e Modelo: #{@modelo}"
    end
end

carro = Carro.new

carro.marca = "Ford"
carro.modelo = "Focus"

puts "Marca: #{carro.marca}"
puts "Modelo: #{carro.modelo}"

puts "Descrição: #{carro.descricao}"