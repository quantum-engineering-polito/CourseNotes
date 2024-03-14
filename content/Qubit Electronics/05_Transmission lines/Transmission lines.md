---
nextnote: 
author: 
authorlink: 
draft: false
---
When working with an RF circuit we can identify different operating regimes depending on the ratio between the wavelength of the signal $\lambda$ and the size of the circuit $L$:

1) $L/\lambda \ll 1$: **quasi static regime** (we can use lumped parameters)
2) $L /\lambda \simeq 1 \quad (L > \lambda / 10)$: **Resonant regime** (we can use transmission line theory)
3) $L /\lambda \gg 1$: **Optical regime**

It is important to notice that if we use a low frequency square wave, this doesn't mean that we can use lumped parameters because the sharp transition of the square wave require very high frequencies to be correctly represented.

Since the length of the transmission line is much bigger than its width we will consider our analysis as 1D.

# Transmission line model

The transmission line is modelled as shown in the sketch below and its circuit representation is as follows:

![[TL circuit.svg|500]]

Where 

$$
\begin{align}
& L_0 &&[A/m] \\
& R_0 && [\Omega /m] \\
& G_0 &&[\Omega/m] \\
& C_0 &&[F/m] \\
\end{align}
$$

## Single section

![[TL section.svg|500]]

To study the behaviour of the transmission line we study a single section of length $\Delta z$ as $\Delta z \to 0$.

We use Kirchhoff laws to find the relation between tension and current: 

$$
\begin{align}
\Delta v(z,t) &= v(z +\Delta z, t) - v(z,t) \\
&= -R_0 \Delta z \cdot i(z,t) - L_0 \Delta z \frac{ \partial v(z,t) }{ \partial t }  \\
 \\
\Delta i(z,t) &= i(z + \Delta z, t)   - i(z,t)  \\
& = -G_0 \Delta z \cdot v(z,t) - C_0 \Delta z \frac{ \partial v(z,t) }{ \partial t } 
\end{align}
$$
>[!warning] 
>In the following $v \equiv v(z,t)$ and $i \equiv i(z,t)$

Dividing by $\Delta z$ both sides and taking the limit for $\Delta z \to 0$ we get 

$$
\lim_{ \Delta z \to 0 } \frac{\Delta v}{\Delta z} =\frac{ \partial v }{ \partial t }  = -R_0 \cdot i - L_0 \frac{ \partial i }{ \partial t } 
$$

$$
\lim_{ \Delta z \to 0 } \frac{\Delta i}{\Delta z} =\frac{ \partial i }{ \partial t }  = -G_0 \cdot v - C_0 \frac{ \partial v }{ \partial t } 
$$

The equations above are called **Telegrapher's equations**.

We now want to get the second derivative of tension and current with respect to $z$.

$$
\begin{align}
\frac{ \partial^{2} v }{ \partial z^{2} } &= -R_0 \frac{ \partial i }{ \partial t } -L_0 \frac{ \partial }{ \partial t } \left[ \frac{ \partial i }{ \partial t }  \right]  \\
& = \dots \quad\text{(substitute and rearrange)}\\
& = R_0G_0 \cdot v + \big(L_0 G_0 + R_0C_0\big) \frac{ \partial v }{ \partial t} + L_0C_0 \frac{ \partial^{2} v }{ \partial t^{2} }  
\end{align} 
$$

$$
\begin{align}
\frac{ \partial^{2} i }{ \partial z^{2} } = \dots = L_0C_0 \frac{ \partial^{2} i }{ \partial t^{2} } + \big(L_0G_0 + R_0C_0\big) \frac{ \partial i }{ \partial t } + R_0 G_0 \cdot i
\end{align}
$$

# Lossless lines

We will only focus on the case where there is no dissipation in the lines (i.e. $R_0 = G_0 = 0$). In this particular case we get the following, simplified, equations (obtained from the ones above): 

$$
\boxed{ \begin{align}
\frac{ \partial v }{ \partial z } &= -L_0 \frac{ \partial i }{ \partial t }  \\ \\

\frac{ \partial i }{ \partial t } &= -C_0 \frac{ \partial v }{ \partial t }  
\end{align} }
\qquad
\boxed{ \begin{align}
\frac{ \partial^{2} v }{ \partial z^{2} } = L_0 C_0 \frac{ \partial^{2} v }{ \partial t^{2} }\\
\\
\frac{ \partial^{2} i }{ \partial z^{2} } = L_0 C_0 \frac{ \partial^{2} i }{ \partial t^{2} }
\end{align} } \tag{*}
$$

We can then represent generic waves travelling in the transmission line, one travelling to the right and the other one to the left: 

$$
\begin{align}
g_{+}(z,t) &= g\Big(t - \sqrt{ L_0 C_0 } ~z\Big) && \text{(travels to the right)} \\ \\

f_{-}(z,t) &= f \Big(t + \sqrt{ L_0 C_0 } ~z\Big) && \text{(travels to the left)}
\end{align}
$$

both these relations satisfy $(*)$.

We now want to evaluate $g_{+}$ at a specific instant $t_0$ and after $\delta t$: 

$$
\begin{align}
g_{+}(z,t_0) &= g(t_0 - \sqrt{ L_0 C_0 } ~z) \\ \\

g_{+}(z, t_0 + \delta t) &= g(t_0 + \delta t - \sqrt{L_0 C_0} ~z)
\end{align}
$$

If we factor out the term $\sqrt{ L_0 C_0 }$ in the second expression we get 

$$
g_{+}(z, t_0 + \delta t) = g\left( t_0 - L_0 C_0 \left( z - {\color{blue} \frac{\delta t}{\sqrt{ L_0 C_0 }}}  \right) \right)
$$

It is easy to see that the blue term is the spatial displacement in the transmission line.

![[displacement 1.svg|500]]

We now want to find the **speed** at which $g_{+}$ travels along the transmission line: 

$$
\mathcal{V}_{+} = \lim_{ \delta t \to 0} \frac{\delta z}{\delta t} = \frac{1}{\sqrt{ L_0 C_0 }} 
$$

We can do the same for $f_{-}$

![[displacement 2.svg|500]]

$$
\mathcal{V}_{-} = \lim_{ \delta t \to 0 } \frac{\delta z}{\delta t} = - \frac{1}{\sqrt{ L_0 C_0 }}
$$

The velocity in the transmission line is defined as 

$$
\mathcal{V} = |\mathcal{V_{+}}| = |\mathcal{V}_{-}| = \frac{1}{\sqrt{ L_0 C_0 }}
$$

# Reflections on terminated lossless lines

To properly study the behaviour of the reflections on the terminated line we can imagine a circuit like the one in the image below 

![[TL reflections.svg|500]]

where we close the switch at $t = 0$.

At the beginning we will have a propagating voltage $v_{+} (0,t) = V$ and a propagating current $i_{+} (0,t) = V / Z_0$.

At $t = \ell / \mathcal{V}$, when the wave reaches the end of the transmission line, we will need another wave to satisfy Ohm's law. We can thus find the voltage as the sum of the incident voltage (travelling to the right) and reflected voltage (travelling to the left), needed to satisfy Ohm's law: 

$$
v(z,t) = v_{+}(z,t) + v_{-}(z,t) \tag{1}
$$

where $v_{+}$ and $v_{-}$ have the same properties as the generic waves defined above: 

$$
\displaylines{
v_{+} (z,t) = g(t - \sqrt{ L_0 G_0 } ~z) \\
v_{-} (z,t) = g(t + \sqrt{ L_0 G_0 } ~ z)
}
$$

After defining the characteristic impedance $Z_0$ as 

$$
\boxed{Z_0 = \sqrt{ \frac{L_0}{C_0} } \quad [\Omega]}
$$

we can use $(1)$ to calculate the current following the same idea as before: 

$$
i(z,t) = \frac{1}{Z_0} v_{+}(z,t) - \frac{1}{Z_0} v_{-}(z,t) \tag{2}
$$

We can finally calculate $R_{L}$ as $v / i$.

