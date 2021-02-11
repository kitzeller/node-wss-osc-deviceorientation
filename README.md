# Socket/OSC/Device Sample - IMGD 5100
# Kit Zellerbach

1. replace `vengeance.local` with your ip or `<your-hostname>.local`
2. install and run mkcert (for Windows I used chocolatey)
make sure you add `<your-hostname>.local` to the cert
e.g. `mkcert -key-file key.pem -cert-file cert.pem localhost 127.0.0.1 <your-hostname>.local`
3. replace the `key` and `cert` in index.js with your file names (make sure they are in the root project folder)
3. run `npm install`
4. access `<your-hostname>.local:3333` on a web browser
5. click the Get Accelerometer Permissions button
6. watch the logs come in on your node.js server!
