# Aplica TGS Design System a las 14 OVAs (solo capa visual en HTML)
$root = Split-Path $PSScriptRoot -Parent

$entries = @(
  "OVAS\OVA_Def_Sistemas\index.html",
  "OVAS\OVA_TGS_CristianMiranda\OVA_TGS_CristianMiranda.html",
  "OVAS\OVA-VICTOR ORTEGA\index.html",
  "OVAS\OVA-Jefersson_Rivera\index.html",
  "OVAS\ova juan camilo santelis\el_jueguiño_mas_bambero_de_santelis.html",
  "OVAS\OVA-Jose_ChavezRamirez\OVA_Clasificacion_Sistemas_ChavezRamirez (1).html",
  "OVAS\OVA_Deivy Florez\OVA_Tipos_de_Sistemas.html",
  "OVAS\OVA - Edwin Gutierrez\index.html",
  "OVAS\Ova-Thomas Galeano\index.html",
  "OVAS\OVA-Jesus_Serrano\ova-comportamientos.html",
  "OVAS\OVA-Robinson_Meza\index.html",
  "OVAS\OVA-Juan_Angarita\ova-cibernetica-juan-angarita.html",
  "OVAS\ova anderson suarez\teoria_informacion.html",
  "OVAS\OVA_Nana\index.html"
)

$snippet = @"
  <!-- TGS-DS-USB -->
  <link rel="stylesheet" href="../../shared/tgs-ova-tokens.css">
  <link rel="stylesheet" href="../../shared/tgs-ova-components.css">
  <link rel="stylesheet" href="../../shared/tgs-ova-homologate.css">
  <script src="../../shared/tgs-ova-theme.js" defer></script>
"@

foreach ($rel in $entries) {
  $path = Join-Path $root $rel
  if (-not (Test-Path $path)) { Write-Warning "Missing: $rel"; continue }
  $c = [System.IO.File]::ReadAllText($path)

  if ($c -notmatch 'TGS-DS-USB') {
    $c = $c -replace '</head>', ($snippet + "`n</head>")
  }

  if ($c -match '<html([^>]*)>') {
    $attrs = $Matches[1]
    if ($attrs -notmatch 'tgs-ova-root') {
      if ($attrs -match 'class="([^"]*)"') {
        $c = $c -replace '<html([^>]*class=")([^"]*)(")', '<html$1$2 tgs-ova-root$3'
      } else {
        $c = $c -replace '<html([^>]*)>', '<html$1 class="tgs-ova-root">'
      }
    }
  }

  [System.IO.File]::WriteAllText($path, $c)
  Write-Output "OK: $rel"
}
