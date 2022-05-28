-- public.clientes definition

-- Drop table

-- DROP TABLE public.clientes;

CREATE TABLE public.clientes (
	id serial4 NOT NULL,
	nome varchar(150) NOT NULL,
	idade int4 NOT NULL,
	uf varchar(2) NOT NULL,
	CONSTRAINT pk_id_cliente PRIMARY KEY (id)
);

INSERT INTO public.clientes (nome,idade,uf) VALUES
	 ('Zézin',18,'SP');
