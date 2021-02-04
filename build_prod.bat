REM this deploys the production code from Master branch to https://uncopied.art/ as a Github page
npm run build
DEL /S /Q docs
move build docs
copy docs\index.html docs\404.html
copy src\robots.txt docs\robots.txt
copy src\sitemap.xml docs\sitemap.xml
copy CNAME docs\CNAME
REM you need to check that the deployment works and usually re-set Github Pages