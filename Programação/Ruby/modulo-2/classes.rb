class Carro
end

novo_carro = Carro.new

puts "Varivael carro: #{novo_carro}"

a = "CARROS SÃO MUITO LEGAIS"
b = a

b.downcase!

puts a
puts b

c = a.clone

c.upcase!
puts c