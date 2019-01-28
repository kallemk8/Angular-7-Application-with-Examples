#!/bin/bash
#Get servers list
set -f
string=$DEPLOY_SERVER
array=(${string//,/ })
#Iterate servers for deploy and pull last commit
for i in "${!array[@]}"; do    
        echo "Deploy project on server ${array[i]}"    
        ssh ubuntu@${array[i]} "cd /home/ubuntu/nodeProjects/cciapi/cciapi && git pull gitlab master && forever restart -c node ."
done

