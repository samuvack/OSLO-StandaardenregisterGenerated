#!/bin/bash

SAS_TOKEN=$1

tar -cvf ../dist.tar *


curl -X PUT -T ../dist.tar -H "x-ms-date: $(date -u)" -H "x-ms-blob-type: BlockBlob" "https://swarmstoraccount.blob.core.windows.net/oslo-standards-register/dist.tar?$SAS_TOKEN"
