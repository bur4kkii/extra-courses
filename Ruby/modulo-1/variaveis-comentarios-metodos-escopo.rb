# Um comentário em ruby é feito da seguinte forma

variaveis_sao_definidas_assim = "é uma variável"
puts variaveis_sao_definidas_assim

# para rodar um arquivo ruby basta digitar no terminal "ruby (e o caminho do arquivo)"
# o null em Ruby é representado como "nil"

esse_e_um_nil = nil

puts variaveis_sao_definidas_assim.nil?
puts esse_e_um_nil.nil?

# da forma descrita acima o programa verifica se a variável é nil
# quando o método tiver uma interrogação no final ele responderá com um booleano

frase_exemplo = " essa frase tem um espaço a mais "

frase_exemplo.strip

puts frase_exemplo

frase_exemplo.strip!
# quando o método tiver um ponto de interrogação no final quer dizer que o método irá modificar a variável permanentemente

puts frase_exemplo


preco = 50

def muda_preco
    preco = 200
    puts preco
end

muda_preco
puts preco