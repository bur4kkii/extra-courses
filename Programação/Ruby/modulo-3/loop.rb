while freio_acionado?
    puts "manter parado"
end

while freio_acionado? do puts "Manter parado" end

until freio_acionado? do puts "Manter parado" end

begin
  verificar_abs
  executar_parada
end while freio_acionado?

for i in [10, 20, 30]
    puts i
end

for i in 1..10
    puts i
end

["laranja", "maçã","uva"].each do [fruta]
    puts fruta
end

["laranja", "maçã","uva"].each {|fruta| puts fruta}

10.upto(100) { |i| puts i}

loop do
    puts "loop infinito"
    break
end