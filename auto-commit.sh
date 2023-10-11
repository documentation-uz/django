#!/bin/bash

# Get the list of filenames from the output of git status
git_status_output=$(git status --porcelain -uall)
changed_files=$(echo "$git_status_output" | awk '{print $2}')

current_datetime=$(date +"%d %B %Y %H:%M:%S")

# Loop through the list of changed files
for file in $changed_files; do
  git add $file
  if [ -z "$1" ]; then
    git commit -m "$file was modified on $current_datetime"
  else
    git commit -m "$1: $file was modified on $current_datetime"
  fi
done

#git push
