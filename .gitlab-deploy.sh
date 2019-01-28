#!/bin/bash
#Get servers list
set -f
string=$DEPLOY_SERVER
array=(${string//,/ })
#Iterate servers for deploy and pull last commit
for i in "${!array[@]}"; do    
        echo "Deploy project on server ${array[i]}"    
        ssh ubuntu@${array[i]} "cd /var/opt/gitlab/nginx/html/test/angularcli && ls && sudo git pull origin master && sudo npm install && sudo ./node_modules/@angular/cli/bin/ng build  && ls && pwd && sudo cp -R /var/opt/gitlab/nginx/html/test/angularcli/dist/udemy/* /var/opt/gitlab/nginx/html/angulerTest/ && sudo cp -R /var/opt/gitlab/nginx/html/test/index.html /var/opt/gitlab/nginx/html/angulerTest/ && ls"
done

