try {
  $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

  Write-Output "Begin GitHub Pages Migration";

  Write-Output "Setting Location: D:\Personal\D2.Data.Pipeline\Docs";
  Set-Location -Path "D:\Personal\D2.Data.Pipeline\Docs";

  Write-Output "Building Docs...";
  npm run docs:build
  if (-not $?) {
    Write-Error "Docs build Failed. Aborting";
    exit 1
  }

  Write-Output "Cleaning Directory: D:\Personal\GitHubPages"
  if (Test-Path "D:\Personal\GitHubPages\.git") {
    Get-ChildItem -Path "D:\Personal\GitHubPages" -Force |
    Where-Object { $_.Name -ne ".git" } |
    Remove-Item -Recurse -Force
  }
  else {
    Write-Error ".git folder not found. Aborting to prevent unsafe deletion."
    exit 1
  }

  Write-Output "Copying... D:\Personal\D2.Data.Pipeline\Docs\.vitepress\dist => D:\Personal\GitHubPages";
  Copy-Item -Path "D:\Personal\D2.Data.Pipeline\Docs\.vitepress\dist\*" -Destination "D:\Personal\GitHubPages\" -Recurse -Force

  Write-Output "Setting Location: D:\Personal\GitHubPages";
  Set-Location -Path "D:\Personal\GitHubPages";

  Write-Output "Running Git..."
  git add -A; 
  git commit -m "Add new version $timestamp";
  git push;

  Write-Output "Done."
  Set-Location -Path "D:\Personal\D2.Data.Pipeline";
}
catch {
  Write-Error "An Error occurred: $_"
  exit 1
}
