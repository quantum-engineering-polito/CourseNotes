
**Cohesion energy** is the energy required to separate (bring at $\infty$ distance) the atoms of a crystal.

We will describe two kinds of solids based on different linking characteristics:

1) Van der Waals bonding (crystals of inert gases)
2) Ionic bonding

## Crystals of inert gases

These crystals can be formed at extremely low temperatures only and we expect them to be **transparent** and **electrical insulators**. Except for $He$ the atoms crystallize in the closest possible form (FCC) and their interaction is based on van der Waals forces.

The **potential** can be determined empirically, we will use the **Lennard-Jones potential**: 

$$
U(R) = 4 \varepsilon \bigg[ \underbrace{ \left( \frac{\sigma}{R} \right)^{12} }_{ \text{repulsive} } - \underbrace{ \left( \frac{\sigma}{R} \right)^{6} }_{ \text{attractive} } \bigg]
$$

where $\varepsilon$ and $\sigma$ are empirical parameters.

The repulsive term can be also written as 

$$
U_{\text{rep}} = \lambda e^{ -R/\rho }
$$
where, again, $\lambda$ and $\rho$ are empirical parameters.

<iframe src="https://www.desmos.com/calculator/exb9kcaotw?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

The repulsion is due to the Pauli exclusion principle.

We want to find the coordinates of the minimum of the potential which corresponds to the **equilibrium point** (i.e. the point where repulsion and attraction balance out).

We can do that by solving 

$$
\frac{ d U }{ \partial R}\Biggr{\lvert}_{R_{req}} = 0 
$$

where $R_{eq}$ is the **equilibrium distance**. We get: 

$$
R_{eq} = 2^{1/6} \sigma = a
$$


The point can be calculated as 

$$
U(R_{eq}) = - \varepsilon
$$

### Equilibrium reticular constant

If we have $N$ atoms, the total potential energy is given by 

$$
U_{tot} = \frac{1}{2}N \sum_{\substack{ j\\ i\neq j }} {4\varepsilon} \left[ \left( \frac{\sigma}{R_{ij}} \right)^{12} - \left( \frac{\sigma}{R_{ij}} \right)^{6} \right]
$$

Where $R_{ij}$ is the distance between the atoms $i$ and $j$.

If we define the **geometrical factor** $p_{ij}$ as 

$$
p_{ij} = \frac{\text{distance between two atoms}}{\text{distance between first neighbours}} = \frac{R_{ij}}{R}
$$

#todo add drawing

we can rewrite 

$$
\begin{align}
U_{tot} &= \frac{1}{2}N \sum_{\substack{ j\\i\neq j }} {4\varepsilon} \left[ \left( \frac{\sigma}{p_{ij} \cdot R} \right)^{12} - \left( \frac{\sigma}{p_{ij} \cdot R} \right)^{6} \right] \\\\
&= 2N\varepsilon \left[ \left( \frac{\sigma}{R} \right)^{12} \sum_{\substack{ j\\ i\neq j }} \left( \frac{1}{p_{ij}} \right)^{12} - \left( \frac{\sigma}{R} \right)^{6} \sum_{\substack{ j\\i\neq j }} \left( \frac{1}{p_{ij}} \right)^{6}\right]
\end{align}
$$

where the two summations depend only on the kind of crystalline structure and thus can always be calculated.

The equilibrium distance for FCC can be calculated as
$$
\frac{d~U_{tot}}{dR}\Biggr{|}_{R_0} = 0
$$
Since the summations can be calculated, the only unknown left is the ratio $\sigma/R_0$, which can be calculated as well. For the FCC structure, for example, $\sigma/R_0 = 1.09$.

## Ionic crystals

Ionic crystals are made up of positive and negative ions. The ionic bond results from the electrostatic interaction of oppositely charged ions.

For ionic crystals (such as $LiF$) the energy will come from **Coulombic interactions** (attractive and repulsive) and from **short range repulsion** (Pauli exclusion principle). There are also van der Waals interaction which can be neglected.

Since the i-th atom will interact with all the others, we will get 

$$
U_{i} = \sum_{\substack{j\\i\neq j}} U_{ij} = \sum_{\substack{j\\i\neq j}} \bigg[ \underbrace{ \lambda \exp{\left(  -\frac{r_{ij}}{\rho}  \right)} }_{ \text{Pauli} } \pm \frac{q^{2}}{4\pi\varepsilon_0 r_{ij}} \bigg]
$$

Where $U_{ij}$ is the interaction between ion $i$ and ion $j$. In the sum ($\pm$) the positive sign is taken when the charges are the same and vice versa.

If we have $2N$ ions $U_{tot} = \frac{1}{2} \cdot 2NU_{i} = NU_{i} = N \sum_{j, i\neq j} U_{ij}$.

As before, we can introduce the **geometrical factor** $p_{ij}$

#todo add drawing

So 

$$r_{ij} = p_{ij} \cdot R \tag{1}$$

And, since the Pauli repulsion only affects first neighbours, we get: 

$$
U_{ij} = \begin{cases}
\lambda \exp\left( -\frac{R}{\rho} \right) - \frac{q^{2}}{4\pi\varepsilon_0 R} && \text{for first neighbours} \\
\pm \frac{q^{2}}{4\pi\varepsilon_0 R} && \text{for the others}
\end{cases}
$$

If we have $z$ first neighbours:

$$
U_{tot} = NU_{i} = N\left[ z\lambda \exp\bigg( -\frac{R}{\rho} \right) - \underbrace{ \sum_{\substack{ j \\ i\neq j }} \frac{(\pm)}{p_{ij}} }_{\alpha } \frac{q^{2}}{4\pi\varepsilon_0R} \bigg] \tag{2}
$$

Where the $(\pm)$ is a sign that takes into account the attraction or repulsion and $\alpha$ is the **Madelung constant** (the summation is a converging series).

If $\alpha > 0$ the crystal is stable.

Similarly to before, the equilibrium constant $R_0$ can be calculated by imposing 

$$
\frac{dU_{tot}}{dR} \Biggr|_{R_0} = 0
$$
getting the condition

$$
\exp\left( -\frac{R_0}{\rho} \right) = \frac{\alpha\rho q^{2}}{4\pi\varepsilon_0 z \lambda R_0^{2}}
$$


which can be substituted in $(2)$ to calculate $U_{tot}(R_0)$: 

$$
U_{tot}(R_0) = -\underbrace{ \frac{N\alpha q^{2}}{4 \pi \varepsilon_0} \frac{1}{R_0} }_{ \text{Madelung energy} } \left( 1 - \frac{\rho}{R_0} \right)
$$

Since usually $\rho < 0.1 \cdot R_0$ the Madelung energy contains $\simeq$ 90% fo the overall cohesion energy.

### Example: Madelung constant

>[!quote] Kittel, page 64


Let's consider the example of a 1D crystal like the one in the image

![[madelung 1D.svg|400]]
From the definition of the Madelung constant and from $(1)$ we get

$$
\displaylines{
\begin{cases}
\alpha = \sum_{j, i\neq j} ~(\pm)/p_{ij} \\ \\
\alpha/R = \sum_{j, i\neq j} ~ (\pm)/r_{ij}
\end{cases} \\
\Downarrow \\
\frac{\alpha}{R} = \sum_{\substack{ j\\i\neq j }} \frac{(\pm)}{r_{ij}}
}
$$

By looking at the drawing we can calculate the summation as follows: 

$$
\begin{align}
\frac{\alpha}{R} &= 2\left[ \frac{1}{R}  - \frac{1}{2R} + \frac{1}{3R} - \frac{1}{4R} + \dots\right]\\
\alpha &= 2\left[ 1  - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \dots\right] \\
\end{align}
$$
The series converges to 

$$
\alpha = 2\ln(2)
$$

---

Read Next [[Free electron model]]