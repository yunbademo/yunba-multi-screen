function Menu()
{
    this.init();
}

Menu.prototype =
{

    foregroundColor: null,
    selector: null,

    init: function()
    {
        var option;

        this.foregroundColor = document.getElementById("brush-color");
        this.foregroundColor.style.cursor = 'pointer';
        this.foregroundColor.width = 48;
        this.foregroundColor.height = 20;
        this.foregroundColor.style.visibility = 'visible';

        this.setForegroundColor( COLOR );

        this.selector = document.getElementById("brush-type");

        for (i = 0; i < BRUSHES.length; i++)
        {
            option = document.createElement("option");
            option.id = i;
            option.textContent = BRUSHE_NAMES[i];
            this.selector.appendChild(option);
        }
    },

    setForegroundColor: function( color )
    {
        this.foregroundColor.style.backgroundColor = 'rgb(' + color[0] + ', ' + color[1] +', ' + color[2] + ')';
    }
}
