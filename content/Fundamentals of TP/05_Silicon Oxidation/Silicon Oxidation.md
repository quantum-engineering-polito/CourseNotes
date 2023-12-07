Silicon oxidation is an additive process that consist in the formation of silicon dioxide ($SiO_{2}$) on the exposed surface of a wafer. This oxide is one of the main reasons why silicon became the most used semiconductor in the industry; $SiO_{2}$ is an excellent dielectric material, it is easy to grow and can be used for many different applications (insulator, masking layer, sacrificial layer in micro-machining, etc.).

>[!warning] Silicon oxidation is not a deposition

There are three main "ingredients" needed for the oxidation:

1) High temperature
2) Exposed $Si$ surface
3) Oxidant atmosphere

This process can grow highly pure $SiO_{2}$ layers up to 2$\mu$m thick; there are other techniques that can create thicker, but less pure layers.

In this course we will only focus on the **amorphous** $SiO_{2}$.

## Oxidation

The oxidation is obtained by heating the silicon wafers in an atmosphere containing an oxidant which can be $O_{2}$ or water steam. The kind of oxidant defines the type of oxidation:

| **Dry oxidation**        | **Wet oxidation**                    |
| ------------------------ | ------------------------------------ |
| $Si + O_{2} \to SiO_{2}$ | $Si + 2 H_{2}O \to SiO_{2} + 2H_{2}$ |
| Slow                     | Fast                                 |
| High purity oxide        | Less pure oxide (there might be $H_{2}$ impurities)                                     |

During the oxidation process the $Si$ is **consumed** and converted into $SiO_{2}$, since the oxide has a density which is $\approx 1/2$ the density of the $Si$, the oxide layers grows thicker and thicker.

![[SiO2.png|300]]

It is extremely important to remember that

>[!warning] Oxidation occurs at the interface, not on top of the oxide

This is because the oxidant molecules have to diffuse through the already formed oxide, reach the pure silicon and oxidize it; on the surface of the $SiO_{2}$ there is no $Si$ to oxidize. For this reason the growth rate will become **slower and slower with time**.

As stated [[#Surface behavior|before]], the surface orientation of the $Si$ substrate will affect the oxidation time: 111 silicon will oxidize 1.7 times faster compared to 100.

## Oxidation equipment



## Modelling thermal oxidation of silicon

> [!error] I'm not too sure about this part, there might be even more mistakes than usual

This paragraph will provide a model to get a simplified tool to predict and calculate:

1) The oxidation rate: $\frac{\partial x_{ox}(t)}{\partial t}$  
2) The final oxide thickness at a given time $t$: $x_{ox}(t)$

The model, proposed by **Deal and Grove**, takes into consideration three fluxes F1, F2 and F3

![[thermal oxidation model.png|400]]

- F1 represents the flow of oxidant gas that diffuses to the surface of the growing film.
- F2 is the flow of the particles that diffuse through the growing film.
- F3  represents the oxidant molecules that react with the $Si$.

The model makes the simplification that F1 = F2 = F3 = J (**steady state**). This means that the model is not accurate for the initial stages of the process and thus cannot be used for very thin layers.

The Deal-Grove model is based on the Fick's first law of diffusion (which is valid in general for diffusion phenomenon).

$$
\begin{align}
J = F_{2} &= -D \cdot \frac{dN}{dx}  \\
&= D \cdot \left( N_{0} - \frac{N_{i}}{x_{0}} \right) \left[ \frac{\text{number of particles}}{cm^{2} \cdot sec} \right]
\end{align}
$$

Where $N_{0}$ is the concentration of oxidant species (particles per $cm^{3}$). $N_{0}$ is $5.2 \times 10^{16}$ for dry oxidation and $3\times 10^{19}$ for wet oxidation.

$D$ is the **coefficient of diffusivity**.

Combining the equation above with 

$$
J = F_{3} = k_{s} \cdot N_{i}
$$

and 

$$
J = F_{2} = F_{3} \quad \text{steady state condition}
$$

we get 

$$
J = \frac{D \cdot N_{0}}{(x_{0} + D/k_{s})}
$$

$k_{s}$ is the **surface reaction speed for oxidation** and is a parameter that "contains" all the characteristics of the materials and the temperature (similarly to the spring constant that takes into consideration the spring diameter, its material, etc.). More in detail, $k_{s}$ "contains":

- Temperature
- Silicon solid state (mono or polycrystalline)
- Crystallographic orientation
- Type of oxidant ($O_2$ or $H_2O$)
- Silicon surface contamination
- Silicon doping

In $k_{s}$ there are **no characteristics related to diffusion**!

The **growth rate** of the oxide layer can be expressed as 

$$
\frac{dx_{ox}}{dt} = \frac{J}{N_{ox}} = \frac{\text{what is available to perform the oxidation}}{\text{what is needed to generate the oxide}}
$$

The oxide thickness at time $t$ is given by: 

$$
x_{ox}(t) = \frac{1}{2} A\left[ \left( \sqrt{ 1+\frac{4B}{A^{2}} (t +\tau) } \right) - 1 \right]
$$

where $\tau$ is a time shift to take into account the starting thickness, $A = 2D/k_{s}$ and $B = 2DN_0/N_{ox}$.


### Oxidation graphs

#todo add something

### Multiple oxidations

<img src="https://i.imgur.com/BTqYo1I.gif">

### Growth rate regimes

For short times we will have a linear oxide growth, since the reaction is limited by the rate of reaction of oxidant with silicon.

For longer times (thicker oxide) on the other hand, the growth rate is limited by the rate of oxidant diffusion through the previously grown layer.

#todo add formulas

## Rapid thermal oxidation

Rapid thermal oxidation is a technique used to form thin, high quality oxide layers in a very short time (in the order of a couple of minutes compare to several hours).

This process exploits UV lights to split $O_{2}$ into oxygen radicals $O^{\bullet}$, which are neutral (non ionized) but extremely reactive.