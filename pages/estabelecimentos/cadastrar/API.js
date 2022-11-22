window.API = {
    endpoint: 'http://estabelecimentos.letscode.dev.netuno.org:25390/services/',
    request: ({service, method = 'POST', data, onSuccess, onError})=> {
        fetch(API.endpoint + service, {
            method: method.toUpperCase(),
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify (data)
        }).then((response) => {
            response.json().then((data) => {
                if (response.ok) {
                    if (onSuccess) {
                        onSuccess(data, response);
                        console.log (data)
                        console.log (response)
                    }
                } else {
                    if (onError) {
                        onError(data, response);
                        console.log (response)
                    }
                }
            });
        }).catch((error) => {
            console.log('Erro geral na comunicação:', error);
            if (onError) {
                onError(error);
            }
        });
    }
}