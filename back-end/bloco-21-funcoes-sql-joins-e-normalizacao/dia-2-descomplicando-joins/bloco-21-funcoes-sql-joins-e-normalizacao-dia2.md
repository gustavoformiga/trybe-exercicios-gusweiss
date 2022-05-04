Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.

SELECT
  movies.title,
  box.domestic_sales,
  box.international_sales
FROM Pixar.BoxOffice AS box
INNER JOIN
  Pixar.Movies AS movies
ON 
  box.movie_id = movies.id;

 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).

 SELECT
    movies.title,
    box.international_sales,
    box.domestic_sales,
    (box.international_sales - box.domestic_sales) AS `diff`,
    (box.international_sales + box.domestic_sales) AS `Total_sales`
FROM 
    Pixar.BoxOffice AS box
INNER JOIN
    Pixar.Movies AS movies
ON box.movie_id = movies.id
WHERE 
    (box.international_sales - box.domestic_sales) > 0;

Exercício 3
Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.

SELECT
    box.movie_id,
    box.rating,
    movies.title
FROM 
    Pixar.BoxOffice AS box
INNER JOIN 
    Pixar.Movies AS movies
ON
    box.movie_id = movies.id
ORDER BY
    box.rating DESC;

Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT
    theater.name,
    theater.location,
    movies.id AS `movie_id`,
    movies.title,
    movies.length_minutes,
    movies.year,
    movies.director
FROM 
    Pixar.Theater AS theater
LEFT JOIN 
    Pixar.Movies AS movies
ON
    theater.id = movies.theater_id
ORDER BY
    theater.name ASC;

Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT
    theater.id,
    theater.name,
    theater.location,
    movies.id AS `movie_id`,
    movies.title,
    movies.length_minutes,
    movies.year,
    movies.director
FROM 
    Pixar.Theater AS theater
RIGHT JOIN 
    Pixar.Movies AS movies
ON
    theater.id = movies.theater_id
ORDER BY
    theater.name ASC;

Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.

SELECT
    box.rating,
    movies.theater_id,
    movies.title,
    movies.director,
    movies.year,
    movies.length_minutes
FROM
    Pixar.BoxOffice AS box
INNER JOIN
    Pixar.Movies AS movies
ON 
    box.movie_id = movies.id
WHERE 
    box.rating > 8 AND movies.theater_id IS NOT NULL;
