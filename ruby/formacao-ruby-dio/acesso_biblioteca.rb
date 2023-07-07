#Solicitar e permitir que o usuário digite o primeiro nome
print "Digite o seu primeiro nome: "
name = gets.chomp.capitalize

#Solicitar e permitir que o usuário digite o sobrenome
print "Digite o seu sobrenome: "
lastname = gets.chomp.capitalize

#Solicitar e permitir que o usuário digite a idade
print "Digite a sua idade: "
age = gets.chomp.to_i

#Forma o nome completo
fullname = name + " " + lastname

#Juntar todas as variáveis em uma única frase

print "Bem vindo! Seu nome é #{fullname} e tem #{age} anos."
