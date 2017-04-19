/// <reference path="typings/tsd.d.ts" />

import * as Hapi from 'hapi';

const server = new Hapi.Server();
server.connection({
	host: 'localhost',
		port: 8000
});