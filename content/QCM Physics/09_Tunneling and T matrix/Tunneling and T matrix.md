---
nextnote: "[[Aharonov-Bohm effect]]"
author: BabelDev0
authorlink: https://github.com/BabelDev0
draft: false
---
# Transport Matrix

A generalize "barrier" is any disturbance of an otherwise flat potential.
We will start considering thte step potential problem.

![[step_barrier.svg|500]]
  
When an incoming electron approaches the potential barrier at position $x=0$, its quantum wave interacts with the barrier. Similar to optical reflection indices for light waves, a portion of the electron's wave is reflected, while another portion is transmitted into the barrier.

the wave functions for the two region are:

$$ 
\displaylines{
\psi_{1} = Ae^{ik_{1}x}+Be^{-ik_{1}x}
\\\\
\psi_{2} = Ce^{ik_{2}x}+De^{-ik_{2}x}
}
$$
with:

$$ 
\displaylines{
x < 0 \qquad k_{1} = \sqrt{ \frac{2mE}{\hbar} }
\\\\
x > 0 \qquad k_{2} = \sqrt{ \frac{2m(E-V_{0})}{\hbar} }
}
$$ 
The wavevector $k_1$​ is real, whereas the wavevector $k_2$​ can be either real or imaginary, depending on the relationship between $E$ and $V_0$​. Specifically, if $E<V_0$​, then the wavevector $k_2$​ is imaginary; otherwise, it is real.

Continuity of the wavefunctions and of their first derivatives in $x=0$ implies:

$$ 
\displaylines{
\psi_{1}(0) = \psi_{2}(0)
\\\\
\psi_{1}'(0) = \psi_{2}'(0)
}
$$ 
so making the calculation we get that:

$$ 
\displaylines{
A+B=C+D
\\\\
k_{1}(A-B) = k_{2}(C-D)
}
$$ 
these are our two boundary conditions. We can write the amplitudes $C$ and $D$ as linear combination of $A$ and $B$ :

$$ 
\displaylines{
C = \frac{1}{2k_{2}}(k_{2}+k_{1}) A + \frac{1}{2k_{2}}(k_{2}-k_{1}) B
\\\\
D = \frac{1}{2k_{2}}(k_{2}-k_{1}) A + \frac{1}{2k_{2}}(k_{1}+k_{2}) B
}
$$ 
Since we can express $C$ and $D$ as linear combinations of $A$ and $B$, we can apply a matrix formalism known as the T-MATRIX (Transport matrix). This allows us to write:

$$ 
\begin{pmatrix} C \\ D \end{pmatrix} = T^{21} \begin{pmatrix} A \\ B \end{pmatrix} = \begin{pmatrix}  
T_{11}^{21} & T_{12}^{21}\\  
T_{21}^{21} & T_{22}^{21}
\end{pmatrix}\begin{pmatrix} A \\ B \end{pmatrix}
 $$
 
The $T$ matrix provides the amplitudes in region 2 based on the amplitudes in region 1. So in our case with one step potential we have that:

$$ 
T^{21} = \frac{1}{2k_{2}}\begin{pmatrix}  
k_{2}+k_{1} & k_{2}-k_{1}\\  
k_{2}-k_{1} & k_{1}+k_{2}
\end{pmatrix} = T(k_{1},k_{2})
$$

In general, $A$, $B$, $C$, and $D$ are complex values, but for simplicity, we can set $A = 1$, $B = r$, $C = t$, and $D = 0$. This simplification makes our context easier to work with. We can designate $r$ as the reflection index and $t$ as the transmission index, as they represent the amplitudes of the reflective and transmitted components, respectively.

$$ 
\begin{pmatrix} t \\ 0 \end{pmatrix} = T^{21} \begin{pmatrix} 1 \\ r \end{pmatrix} = \begin{pmatrix}  
T_{11}^{21} & T_{12}^{21}\\  
T_{21}^{21} & T_{22}^{21}
\end{pmatrix}\begin{pmatrix} 1 \\ r \end{pmatrix}
 $$

solving the system we get:

$$ 
\displaylines{
t = \frac{Det(T^{21})}{T_{22}^{21}}
\\\\
r = -\frac{T_{21}^{21}}{T_{22}^{21}}
}
$$

the relation above always apply in the case of $A = 1$, $B = r$, $C = t$, and $D = 0$.

If instead of a barrier in $x=0$ we have a barrier in $x=d>0$ the Matrix T change as follow:

$$ 
T^{21}(d) = 
\begin{pmatrix}  
e^{-ik_{2}d} & 0\\  
0 & e^{ik_{2}d}
\end{pmatrix}
\ T^{21}(0)\ 
\begin{pmatrix}  
e^{ik_{1}d} & 0\\  
0 & e^{-ik_{1}d}
\end{pmatrix}
$$

or

$$ 
T^{21}(d) = \begin{pmatrix}  
T_{11}e^{i(k_{1}-k_{2})d} & T_{12}e^{i(k_{1}+k_{2})d}\\  
T_{21}e^{i(k_{1}+k_{2})d} & T_{22}e^{i(k_{1}-k_{2})d}
\end{pmatrix}
$$

This approach can also be extended to subsequent regions and barriers. The power of the matrix formalism lies in the fact that the treatment becomes a straightforward multiplication of matrices.

![[multiple_barriers.svg|500]]

$$ 
\displaylines{
\begin{pmatrix} C \\ D \end{pmatrix} = T^{21} \begin{pmatrix} A \\ B \end{pmatrix} = \begin{pmatrix}  
T_{11}^{21} & T_{12}^{21}\\  
T_{21}^{21} & T_{22}^{21}
\end{pmatrix}\begin{pmatrix} A \\ B \end{pmatrix}

\\\\

\begin{pmatrix} E \\ F \end{pmatrix} = T^{32} \begin{pmatrix} C \\ D \end{pmatrix} = \begin{pmatrix}  
T_{11}^{32} & T_{12}^{32}\\  
T_{21}^{32} & T_{22}^{32}
\end{pmatrix}\begin{pmatrix} C \\ D \end{pmatrix}

\\\\

\begin{pmatrix} E \\ F \end{pmatrix} = T^{31} \begin{pmatrix} A \\ B \end{pmatrix} \qquad T^{31}=T^{32}T^{21}
}
$$

also in the case of $n$ regions ($n-1$ barriers) we have that if $A = 1$, $B = r$, $A_{n-1} = t$, and $B_{n-1} = 0$ we have the following relations: 

$$ 
\displaylines{
t = \frac{Det(T^{n1})}{T_{22}^{n1}}
\\\\
r = -\frac{T_{21}^{n1}}{T_{22}^{n1}}
}
$$

If our system has a time-reversal symmetry and is symmetric respect to the barriers, the transfer matrix's determinant is equal to 1 so in thus cases

$$ 
\displaylines{
t = \frac{1}{T_{22}}
}
$$

and we have that  $T_{11}=T_{22}^{*}$ and  $T_{11}=T_{22}^{*}$.

We can write the total transmission probability as:

$$ 
T = |t|^{2} = \frac{1}{|T_{22}|^{2}} 
$$ 
# Quantum and classical transmittance


![[classical_vs_quantum.png]]

we can see that the quantum case differ from the classical one not only when $E<V_0$ but also when it is $>V_0$.

Some of the parameters that influence the transmittance index:

**Height of the Barrier**: The probability of tunneling decreases exponentially with the increase in the barrier's height.

**Width of the Barrier**: The tunneling probability decreases exponentially as the width of the barrier increases.

**Mass of the Particle**: Heavier particles have a lower probability of tunneling compared to lighter ones.

# Resonant-tunnelling diode

An interesting application of resonant tunneling is the **RESONANT-TUNNELING DIODE** which typically consists of a central layer of undoped GaAs separated from doped GaAs contact regions by means of AlAs (or AlGaAs) tunnel barriers. 

![[RTD.png|450]]

Resonant tunneling is induced by applying a variable voltage bias between the contacts which possibly matches the (first) resonant energy $E_0$.

![[resonant_tunneling.png|500]]

The image illustrates the operation of a resonant tunneling diode (RTD).

**Section (a): Small Bias Applied**

When a small voltage is applied across the device, the resonant level $E_0$ (the energy at which electrons can tunnel resonantly) is above the Fermi energy (the highest energy an electron has at absolute zero temperature) of the source contact. Because the resonant level is higher than the energy of most electrons, very few can tunnel through, resulting in a small current.

**Section (b): Increased Bias**

As the voltage (bias) increases, the resonant level aligns with the Fermi level of the source, allowing electrons to tunnel through the well more easily. The alignment of the resonant level with the Fermi energy increases the current sharply because many more electrons have the right energy to tunnel through the resonant level.

**Section (c): Higher Bias**

When the bias is increased further, the resonant level moves below the Fermi level of the source. This condition still allows a significant number of electrons to tunnel through, so the current remains high, but there is a decrease in the current.

**Section (d): Too High Bias**

At a very high bias, the resonant level drops too low, below the energy of most electrons in the source. This misalignment means that fewer electrons have the energy to tunnel through the barrier, and thus the current decreases rapidly.
# Coulomb blockade

Is a phenomenon where the transfer of an electron to a small conducting island is prevented due to the repulsive force (Coulomb force) from electrons already present on the island. In essence, it becomes energetically expensive for additional electrons to join the island once a certain number of electrons are present, due to the increase in electrostatic energy. This phenomenon applies a more restrictive condition for the transmission of electrons from source to drain towards the barriers. Indeed even if an electron has the right energy (energy in the range align with the resonant energy), it still might not get through because of the repulsion from other electrons.

The increase in electrostatic energy of the system associated with the transfer of a charge $Q$ in the island is:

$$ 
\Delta E = \underbrace{QV_{g}}_{\text{gate voltage}}+\underbrace{\frac{Q^{2}}{2C}}_{\text{Coulomb interaction}}
$$

When $n$ electrons have been transferred to the island, the change in electrostatic energy of the system is given by :

$$ 
\Delta E(n) = -neV_{g}+\frac{n^{2}e^{2}}{2C}
$$

where we replaced $Q$ with $n(-e)$. So the increase of energy associated to the transfer of only one electron is given by:

$$ 
\Delta E(n+1)-\Delta E(n) = -eV_{g}+n\frac{e^{2}}{2C} \qquad n\gg_1
$$ 
we can notice that if $V_g = n\frac{e}{2C}$ the increase of energy associated to the transfer of only one electron is 0 and we have the **resonant tunneling transport of electrons.**

The Coulomb blockade prevents electrons from randomly moving onto the island due to thermal energy or electrical noise. It ensures that electron transfer only happens under very controlled conditions, the resonant condition.

![[QCM Physics/09_Tunneling and T matrix/attachments/coulomb_blockade.png]]

this phenomenon can be exploit to create a transistor device which can control the flow of individual electrons. That is the principles used in SET (Single-Electron Transistor)


