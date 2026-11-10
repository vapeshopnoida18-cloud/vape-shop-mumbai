$files = Get-ChildItem -Path "d:/brandmingo-work/vape shop mumbai/src" -Recurse -Include "*.jsx","*.js","*.css"
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $newContent = $content `
        -replace '#325f98', '#000b42' `
        -replace '#254977', '#00072e' `
        -replace '#274c7a', '#00072e' `
        -replace '\[#325f98\]', '[#000b42]' `
        -replace '3f76bd', '1a2a6e'
    if ($newContent -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent)
        Write-Host "Updated: $($file.Name)"
    }
}
Write-Host "Done!"

