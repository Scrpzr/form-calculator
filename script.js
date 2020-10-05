<script>

document.addEventListener("DOMContentLoaded", event => {
    //update results when changing a parameter
    $('[name=name of parameter 1]').change(updateResult)
    $('[name=name of parameter 2]').change(updateResult)
    $('[name=name of parameter 3]').change(updateResult)
		//add as much parameters as you need
    $('[name=name of parameter X]').change(updateResult)

    function updateResult() {
        //Get values by names et create var
        const Var1 = $('[name=name of parameter 1]').val()
        const Var2 = $('[name=name of parameter 2]').val()
        const Var3 = $('[name=name of parameter 3]').val()
				//add as much var as you need
        const VarX = $('[name=name of parameter X]').val()

        // calculer le resultat en utilisant les const crées précédement
        const Result = Var1 + Var2 * Var3 / VarX

        // affiche le resultat dans le champs Valeur
        const resultField = $('#result')
        resultField.text(`${Result}`)
        resultField.val(`${Result}`)
    }
 })
</script>
