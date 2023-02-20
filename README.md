# express_database_example

## Yhteys tietokantaan

Ei käytetä mielellään root-tunnusta vaan luodaan jokin muu esim.
<pre>
create user 'tvt22spo'@'localhost' identified by 'tvtpass';
grant all on library.* to 'tvt22spo'@'localhost';
</pre>