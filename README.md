# express_database_example

## Yhteys tietokantaan

Ei käytetä mielellään root-tunnusta vaan luodaan jokin muu esim.
<pre>
create user 'tvt22spo'@'localhost' identified by 'tvtpass';
grant all on library.* to 'tvt22spo'@'localhost';
</pre>

## .env

Tiedostoa **.env** ei yleensä viedä GitHubiin, koska se voi sisältää esimerkiksi tietokannan salasanan.
Sinne voi siis lisätä ns. ympäristömuuttujia, kuten tässä esimerkissä
<pre>
port=3000
mysqlString="mysql://tvt22spo:tvtpass@localhost:3306/library"
</pre>
Ja näihin voidaan viitata koodissa seuraavasti
<pre>
process.env.port
process.env.mysqlSring
</pre>

Tässä esimerkissä laitoin kuitenkin tiedoston **.env** mukaan GitRepoon.