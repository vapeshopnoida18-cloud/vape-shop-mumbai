$files = Get-ChildItem -Path "d:\brandmingo-work\vape shop mumbai\src" -Recurse -Include "*.jsx","*.js","*.json","*.tsx","*.ts"
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $newContent = $content `
        -replace '918053117437', '917082674286' `
        -replace '8053117437', '7082674286' `
        -replace '80531 17437', '70826 74286'
    if ($newContent -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent)
        Write-Host "Updated: $($file.Name)"
    }
}
Write-Host "All phone numbers updated successfully!"

