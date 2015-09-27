RESTful API for finding the name of a state's governor and senators.


# Installation

Clone repo:

```
https://github.com/jrrembert/elected-official-rest-api.git
```

The site only serves content over HTTPS so will will need to generate a self-signed certificate. Instructions use openssl, but other methods work as well.

1. Generate a private key
openssl genrsa -des3 -out server.key 1024

2. Generate a Certificate Signing Request
openssl req -new -key server.key -out server.csr

3. Generate Self-Signed Cert
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

4. (Optional) Remove Passphrase from Key

openssl rsa -in server.key -out new_server.key && mv new_server.key server.key

# Run server

```
$ node ./src/app.js
```

# Usage

The API exposes a single endpoint and excepts an option ```state``` query parameter that accepts the name of a state as a value.

# Example API calls and results

```
GET https://localhost:3000/myapi
```

```
GET https://localhost:3000/myapi?state=
```