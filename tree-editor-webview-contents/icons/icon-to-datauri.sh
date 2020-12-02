#!/bin/bash
# https://gist.github.com/puppybits/1565441/378180ab1d9b73a39099a24a2167318a426ee4bb

b64img(){
    # Remove escapes from the spaces
    FILE_PATH=$(echo $1 | tr -s " " "\\ ")

    filename=$(basename $FILE_PATH)
    ext=${filename##*.}
    if [ $ext == gif ]; then
        append="data:image/gif;base64,";
    elif [ $ext == jpeg ] || [ $ext == jpg ]; then
        append="data:image/jpeg;base64,";
    elif [ $ext == png ]; then
        append="data:image/png;base64,";
        echo "this worked {$FILE_PATH}"
    elif [ $ext == svg ]; then
        append="data:image/svg+xml;base64,";
    elif [ $ext == ico ]; then
        append="data:image/vnd.microsoft.icon;base64,";
    fi

    #Mathias Bynens - http://superuser.com/questions/120796/os-x-base64-encode-via-command-line
    data=$(openssl base64 < "$FILE_PATH" | tr -d '\n')

    if [ "$#" -eq 2 ] && [ $2 == -img ]; then
	    data=\<img\ src\=\"$append$data\"\>
    else
      data=$append$data
    fi
    echo $data
}

DIR="$(dirname $0)"
OUT="$DIR/converted.js"
echo "const icons = {" > $OUT

for file in "$DIR"/*.gif
do
  echo $file
  FILENAME=$(basename -- "$file")
  FILENAME="${FILENAME%.*}"
  echo "  \"$FILENAME\": \"$(b64img $file)\"," >> $OUT
done

echo "};" >> $OUT
