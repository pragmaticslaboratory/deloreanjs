(TeX-add-style-hook
 "main"
 (lambda ()
   (setq TeX-command-extra-options
         "-shell-escape")
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("acmart" "sigconf" "STYLE" "screen")))
   (TeX-run-style-hooks
    "latex2e"
    "acmart"
    "acmart10")
   (TeX-add-symbols
    "BibTeX")
   (LaTeX-add-labels
    "fig:teaser"
    "tab:freq"
    "tab:commands")
   (LaTeX-add-bibliographies
    "bibfile"
    "bib"))
 :latex)

