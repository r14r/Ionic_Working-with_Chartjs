# Working-with-Chartjs

## Prepare Ionic App

    npm install chart.js            --save
    npm install @types/chart.js     --save-dev


## Prepare Samples

Clone the samples from https://github.com/chartjs/Chart.js.git and https://github.com/chartjs/chartjs.github.io.git into 
''repositories''

### Setup sample pages

Find all sample html pages, create ionic page and extract html, css und javascript parts into created page directory


Extract CSS and JavaScript to separates files and copy HTML file of samples directory:

#!/bin/bash

TPL=template
SRC=repositories/chartjs.github.io/samples/master
DST=src/app/pages
        
rm -f src/app/MASTER.ts.components

find $SRC -name "*html"		|\
while read _FPATH
do
	_FFLDR="$(echo "$_FPATH" | cut -d/ -f5- | tr '/-' '_')"
	_FFLDR="$(basename "$_FFLDR" .html)"
	__FNAME__="$(echo "$_FFLDR" | tr '_' '-')"
	__PNAME__="$(echo "$__FNAME__" | perl -pe 's/(^|-)(\w)/\U$2/g')"

	_DPATH=$DST/$__FNAME__

	ionic generate page pages/$_FNAME
	cp $_FPATH $_DPATH/MASTER.html

	for _F in module.ts page.html page.ts
	do
		cat $TPL/__TEMPLATE__.${_F}.tpl		|\
		sed "1,\$s/__PNAME__/$__PNAME__/g"	|\
		sed "1,\$s/__FNAME__/$__FNAME__/g"	|\
		cat >$_DPATH/${__FNAME__}.${_F}

	done

	cat $_FPATH | sed -n '/<style>/,/<\/style>/p'   | grep -v style 	>$_DPATH/${__FNAME__}.page.scss
	cat $_FPATH | sed -n '/<script>/,/<\/script>/p' | grep -v script	>$_DPATH/MASTER.ts

    echo "  , { title: '$__FNAME__', url: '/$__FNAME__', icon: 'stats' }"		>>src/app/MASTER.ts.components
done


