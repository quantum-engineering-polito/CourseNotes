---
nextnote: "[[Quantum Hall effect]]"
author: Giacomo, BabelDev0
authorlink: https://github.com/gamberoillecito,https://github.com/BabelDev0
---
# 2D Electron Gas

Now we will study the case in witch we have an almost intrinsic material in an heterostructure with an heavily doped one. In this case electron start to diffuse form the left-hand side (the heavily doped material) to the right-hand side, this effect is called **remote doping** or **modulation doping**.

**n**: almost intrinsic
**N**: heavily doped

![[QCM Physics/05_2DEG/attachments/excalidraw/remote doping.svg|400]]

So some electron flow from the left-hand side (the heavily doped material) to the right-hand side, doing that they loose energy and become trapped because they cannot climb the barrier formed by the band bending. Furthermore the discontinuity in the band prevents the electric filed to returns the electrons to the donors, and contribute at squeezing the electrons on the **triangular potential well** just formed. 

The green line in the drawing is the tangent to the conduction band which can be used as an approximation for a **triangular potential well**, the width of the well is typically around 10 nm.

For sufficiently thin potential wells and moderate temperatures, only the lowest energy level (typically the ground state) is occupied. Consequently, the motion of electrons in the direction perpendicular to the interface (z direction) can be disregarded. However, the electron retains freedom to move parallel to the interface, making it quasi-two-dimensional. Within the well, the planar motion of electrons experiences weak scattering due to the absence of dopants (specifically ionized impurity scattering). Modulation doping proves to be an effective strategy for reducing donor electron scattering. This reduction in scattering is crucial for enhancing mobility. Inside the two-dimensional electron gas (2DEG), the mobility is remarkably high. Hence, this structural arrangement is well-suited for constructing high-speed devices such as High Electron Mobility Transistors (HEMTs).

# Electronic levels for 2DEG
We can consider the 2DEG an area where the electrons are free to move in the ($x$,$y$) direction and confined by a triangular well in the $z$ direction.

![[2DEG-planar.svg]]
We can assume that $L_{x}$ and $L_{y}$ are macroscopic quantities and that $A = L_{x} \cdot L_{y}$ and applying the [[Free electron model]] considering the potential constant and equal to zero in the ($x$,$y$) direction $V(x,y)=0$ we can write the Shrödinger equation:
$$
-\frac{\hbar^{2}}{2m} \nabla^{2} \Psi(x,y,z) + V(z) \Psi(x,y,z) = E ~ \Psi(x,y,z)
$$

since the potential depend only on $z$ we can look for solution like:

$$
\Psi(x,y,z) = \phi(x,y) \cdot \theta(z)
$$

substituting in the SE we get:

![[subsolution.png]]

$$
\begin{align} \\
 & -\frac{\hbar^{2}}{2m}\left( \frac{ \partial^{2} }{ \partial x^{2} } + \frac{ \partial^{2} }{ \partial x^{2} }  \right) \phi(x,y) = E \phi(x,y) \tag{1} \\ \\
 & -\frac{\hbar^{2}}{2m} \frac{d^{2}}{dz^{2}} + V(z) \theta(z) = E \theta(z) \tag{2}
\end{align}
$$

Equation (1) describes free electrons in the $xy$ plane (where the potential is constant) and thus we get plane waves: 

$$
\begin{align}
 & \phi(x,y) = \frac{1}{\sqrt{ A }} e^{ i \bar{k} \bar{r} } = \frac{1}{\sqrt{ A }} e^{ i(k_{x} \cdot x + k_{y} \cdot y) }  \qquad A = L_{x} \cdot L_{y} \\
 \\
 & E_{xy} = \frac{\hbar^{2} k^{2}}{2m} = \frac{\hbar^{2} (k^{2}_{x} + k^{2}_{y})}{2m}
\end{align}
$$

> [!Note] 
>
Notice that $m$ should be the **effective mass** $m^{*}$ in the real experiment .
calculation

Applying the [[#^dedc30|PBC]] to the $x$ and $y$ directions we get 

$$
\begin{align}
 & \phi(x + L_{x}, y, z) = \phi(x,y,z) \implies k_{x} = \frac{2\pi}{L_{x}} \cdot n_1\\
 & \phi(x , y + L_{y}, z) = \phi(x,y,z) \implies k_{y} = \frac{2\pi}{L_{y}} \cdot n_2
\end{align}
$$

Equation (2), on the other hand, describes the particles in a triangular potential well. The well can be approximated as a capacitor which represent the interface between the materials. The electrostatic potential $\Phi$ associated to the uniform electric field pointing along the positive z direction is:

$$
\begin{align}
 & \frac{ d \Phi }{ dz }  = - \bar{\varepsilon} \\\\
& \Phi = -\bar{\varepsilon} z + \text{constant} \\\\
& \Phi(0) = 0 \Longrightarrow \text{constant}=0 \\\\
& \Phi = -\bar{\varepsilon} z 
\end{align}
$$

The potential energy of an electron is $V(z) = e\varepsilon z$ 

![[potentialEnergy2deg.png|550]]

![[calculation2deg.svg]]

we get:

$$
\begin{align}
 & \frac{d^{2}}{dS^{2}} \theta(S) = S \theta(S) \tag{3} \\ \\
& \begin{cases}
S = \bar{z} - \bar{E}  \\
\bar{z} = z/z_0 \\
\bar{E} = E_{z}/E_0 \\
z_0 = \left[ \frac{\hbar^{2}}{2~m~e~\varepsilon} \right]^{1/3} &&\leftarrow \text{characteristic length} \\
E_0 = \frac{\hbar^{2}}{2~m~z_0^{2}}  && \leftarrow \text{characteristic energy}
\end{cases}
\end{align}
$$

Equation (3) is the **Airy (Stokes) equation** and has two possible solution $A_{i}$ and $B_{i}$ of which only the first one is acceptable ($B_{i}$ diverges).

![[Airy.png]]

We have to impose the boundary conditions (**continuity**) to the SE:  $\theta(z = 0) = 0$. Since the equation we have is in the variable $S$ we get 

$$
\displaylines{
z = 0 \iff S = -\bar{E}\\
\Downarrow \\
\theta(S = -\bar{E}) = 0
}
$$

This is true only in the values $C_{i}$ for which $A_{i} = 0$. This means (similarly to the infinite potential well) that the possible energy values are quantized:

$$
\begin{align}
 E_{z} &= |C_0| E_0 && \leftarrow ~ 1^{st} \text{ allowed energy value} \\
E_{z} &= |C_1| E_0 && \leftarrow ~ 2^{nd} \text{ allowed energy value} \\
 &&\vdots
\end{align}
$$

To plot the function for $z$, since $S = z - \bar{E}$, we have to shift the plot by $\bar{E}$. Knowing the possible values of $\bar{E}$ (which are the roots $C_{i}$), we just have to shift $\theta(S)$ to the right to put $C_{i}$ in the origin and discard everything for $z < 0$.
For each energy level we get a different wave function.

![[Triangular.jpg|500]]
From above we know that $E = E_{xy} + E_{z}$ and thus:

$$
E = \frac{\hbar^{2}k^{2}}{2m} + |c_{n}|E_0 \tag{7}
$$
For each discrete value of $n$ corresponds an infinite number of values of $E_{xy}$. the eigenvalues are arranged in "Subbands" one band for each value of allowed $E_z$ 


![[paraboloid subbands.png|400]]

## Density of states of a 2DEG

#todo add better explanation

We calculate the DOS for one sub-band and then extend the results to the others. For simplicity we suppose that there is only one sub-band with vertex in the origin and thus:

$$
E = \frac{\hbar^{2}k^{2}}{2m} \tag{7b}
$$

Since we are in a 2D case, we normalize the DOS to the area, instead of the volume:

$$
D(E) = \frac{1}{A} \frac{dN(E)}{dE} \qquad A=L_{x}L_{y} 
$$
$$   
k_{x} = \frac{2\pi}{L_{x}} \cdot N_1 \quad k_{y} = \frac{2\pi}{L_{y}} \cdot N_2
$$

Now we can follow the same steps taken in the [[#Density of states (DOS)|original case]].

![[2DEG DOS.png|400]]

$$
N = \frac{\overbrace{ \pi k^{2} }^{ \text{area of circle} }}{\frac{2\pi}{L_{x}} \cdot \frac{2\pi}{L_{y}}} \cdot \underset{ \substack{ \uparrow \\ \text{spin} } }{ 2 } = A \frac{k^{2}}{2\pi}
$$

Using $(7b)$ we can rewrite $N$ as a function of $E$ 

$$
N(E) = \frac{A}{2\pi} \frac{2mE}{\hbar^{2}}
$$

And finally, for a given sub band:

$$
D(E) = \frac{1}{\cancel{ A }} \frac{m\cancel{ A }}{\pi \hbar^{2}} = \frac{m}{\pi \hbar^{2}}
$$

If we now consider all sub bands we get 

![[2DEG DOS 2.png|400]]

$$
D(E) = \frac{m}{\pi \hbar^{2}} \sum_{i=1}^{\infty} M(E - E_{i}) \\
$$

$$
M(E - E_{i}) = \begin{cases}
\begin{align}
1 && E \geq E_{i} \\
0 && E < E_{i}
\end{align}
\end{cases}
$$

## MEMT (MODFET)

#todo 

